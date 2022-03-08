import React, { useEffect } from "react";
import { useState } from "react";
import { BarChart } from "../components/BarChart/BarChart";
import { Search } from "../components/Search/Search";
import { Table } from "../components/Table/Table";
import { DepartmentService } from "../services/DepartmentService";
import styled from "styled-components";
import { Configuration } from "../configuration";

const Wrapper = styled("div")`
  .search {
    margin: 0 auto;
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    > div {
      flex: 1;
    }
  }
`;

export default function Challenge() {
  const [statistics, setStatistics] = useState<
    | undefined
    | {
        key: string;
        points: { [key: string]: number };
      }
  >(undefined);

  const [employees, setEmployees] = useState<
    { name: string; salary: number; id: string }[]
  >([]);

  const refreshRate = Configuration.getRefreshRate();

  const [departmentNotFound, setDepartmentNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [department, setDepartment] = useState<string>();
  const [previousInterval, setPreviousInterval] = useState<NodeJS.Timer>();

  useEffect(() => {
    let currentInterval: NodeJS.Timer;

    if (previousInterval) {
      clearInterval(previousInterval);
    }

    if (department) {
      handleDepartmentSearch(department);

      const id = setInterval(() => {
        handleDepartmentSearch(department);
      }, refreshRate);

      setPreviousInterval(id);
    }

    return function cleanup() {
      currentInterval && clearInterval(currentInterval);
    };
  }, [department]);

  const handleDepartmentSearch = async (search: string) => {
    try {
      console.log(`searching for department: ${search}`);

      if (!search) {
        return alert(`Search is empty!`);
      }

      setIsLoading(true);
      setDepartmentNotFound(false);

      const statistics = await DepartmentService.getDepartmentSalaryStatistics(
        search
      );

      if (!statistics) {
        setDepartmentNotFound(true);
        return;
      }

      setEmployees(statistics.employees);
      setStatistics({
        key: search,
        points: {
          minimum: statistics.min,
          maximum: statistics.max,
          average: statistics.avg,
        },
      });
    } catch (error) {
      console.error(
        `an error ocurred getting department${search} salary statistics`,
        { error }
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <h1>Challenge #1</h1>
      <p className="text-muted">
        This view, calls an endpoint on the backend to get a department's salary
        summary. and populates a table After each search, it will refresh
        automatically after {refreshRate / 1000} seconds.
    
      </p>

      <hr />

      <Search
        label="Department"
        onSearch={(search) => setDepartment(search)}
        placeholder="Art & Design"
        className="search"
      />

      <div className="content">
        {departmentNotFound && <div>Hmm. No info for that department.</div>}

        {!departmentNotFound && (
          <React.Fragment>
            {statistics && (
              <BarChart
                key={statistics.key}
                points={statistics.points}
                colors={{
                  minimum: "#ffd000",
                  maximum: "#ff007e",
                  average: "#0092ff",
                }}
              />
            )}

            {employees.length > 0 && (
              <Table columns={["id", "name", "salary"]} rows={employees} />
            )}
          </React.Fragment>
        )}
      </div>
    </Wrapper>
  );
}
