import React, { useState } from "react";

import {
  AlertDismissibleError,
  TableThead,
  MySpinner,
  TableRow,
} from "../components/table_components";

import MutableModal from "../components/MutableModal";

import { useObjects } from "../components/utils";

export default function MutableTable(props) {
  const [tableError, setError] = useState(null);
  const { data, isLoading, mutate } = useObjects(props.table_name);

  return (
    <div className="users--list">
      {tableError && (
        <AlertDismissibleError errorText={tableError} setter={setError} />
      )}
      <MutableModal
        table_name={props.table_name}
        action={"create"}
        obj={""}
        mutate={mutate}
      />
      <table className="table table-hover">
        <thead key="thead" className="thead-dark">
          <TableThead table_name={props.table_name} />
        </thead>
        <tbody>
          {isLoading ? (
            <MySpinner table_name={props.table_name} />
          ) : (
            data.map((obj) => (
              <tr key={obj["pk"]}>
                <TableRow
                  table_name={props.table_name}
                  obj={obj}
                  errorSetter={setError}
                  mutate={mutate}
                />
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
