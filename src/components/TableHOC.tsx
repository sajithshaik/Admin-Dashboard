  import {
    Column,
    usePagination,
    useSortBy,
    useTable,
    TableOptions,
  } from "react-table";
  
  function TableHOC<T extends object>(
    columns: Column<T>[],
    data: T[],
    containerClassname: string,
    heading: string,
    showPagination: boolean = false
  ) {
    return function HOC() {
      const options: TableOptions<T> = {
        columns,
        data,
        initialState: {
        },
      };
  
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        
      } = useTable(options, useSortBy, usePagination);
  
      return (
        <div className={containerClassname}>
          <h2 className="heading">{heading}</h2>
  
          <table className="table" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th>
                      {column.render("Header")}
                        <span>
                          {" "}
                        </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            </tbody>
          </table>
  
          {showPagination && (
            <div className="table-pagination">
              <button>
                Prev
              </button>
              <span></span>
              <button >
                Next
              </button>
            </div>
          )}
        </div>
      );
    };
  }
  
  export default TableHOC;

