import React, { Component, Fragment } from "react";
import {
  DataTable,
  DataTableContent,
  DataTableHead,
  DataTableBody,
  DataTableHeadCell,
  DataTableRow,
  DataTableCell
} from "@rmwc/data-table";

import { Icon } from "@rmwc/icon";

import { Checkbox } from "@rmwc/checkbox";

import { Textfit } from "react-textfit";

const fakeData = [
  {
    columnId: "1",
    columnOpen: "1321",
    columnModulo: "TREN MIXTO",
    columnLabel: "BA03",
    columnDate: "08/07/2018 - DIA",
    columnCc: "7",
    columnReason:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    columnBalance: 29,
    columnInstance: "CUARTA",
    columnPayed: "03/10/2018 - $29",
    columnResolved: "SI",
    columnComment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit"
  },
  {
    columnId: "2",
    columnOpen: "1322",
    columnModulo: "TREN MIXTO",
    columnLabel: "BA03",
    columnDate: "08/07/2018 - DIA",
    columnCc: "7",
    columnReason:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    columnBalance: 29,
    columnInstance: "CUARTA",
    columnPayed: "03/10/2018 - $29",
    columnResolved: "SI",
    columnComment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit"
  },
  {
    columnId: "3",
    columnOpen: "1323",
    columnModulo: "TREN MIXTO",
    columnLabel: "BA03",
    columnDate: "08/07/2018 - DIA",
    columnCc: "7",
    columnReason:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    columnBalance: 29,
    columnInstance: "CUARTA",
    columnPayed: "03/10/2018 - $29",
    columnResolved: "SI",
    columnComment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit"
  },
  {
    columnId: "4",
    columnOpen: "1324",
    columnModulo: "TREN MIXTO",
    columnLabel: "BA03",
    columnDate: "08/07/2018 - DIA",
    columnCc: "7",
    columnReason:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    columnBalance: 29,
    columnInstance: "CUARTA",
    columnPayed: "03/10/2018 - $29",
    columnResolved: "SI",
    columnComment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit"
  }
];

class FaltantesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData,
      columnOpen: true,
      columnId: true,
      columnModulo: true,
      columnLabel: true,
      columnDate: true,
      columnCc: true,
      columnReason: true,
      columnBalance: true,
      columnInstance: true,
      columnPayed: true,
      columnResolved: true,
      columnComment: true
    };
  }
  componentDidMount = () => {
    this.setState({
      data: fakeData
    });
  };

  render() {
    const columns = [
      "Open",
      "Modulo",
      "Etiqueta",
      "Fecha",
      "C/C",
      "Causa",
      "Monto ($)",
      "Instancia",
      "Pagado",
      "Rendido",
      "Comentario",
        "Acciones"
    ];

    const TableHeads = () => (
      <DataTableHead>
        <DataTableRow>
          {columns.map((item, i) => (
            <DataTableHeadCell
              style={{ backgroundColor: "deepskyblue" }}
              key={i}
            >
              {item}
            </DataTableHeadCell>
          ))}
        </DataTableRow>
      </DataTableHead>
    );

    const TableData = () =>
      this.state.data.map((item, i) => (
        <DataTableRow key={i}>
          <DataTableCell style={{ backgroundColor: "lightcyan" }}>
            {item.columnOpen}
          </DataTableCell>
          <DataTableCell>{item.columnModulo}</DataTableCell>
          <DataTableCell>{item.columnLabel}</DataTableCell>
          <DataTableCell>{item.columnDate}</DataTableCell>
          <DataTableCell>{item.columnCc}</DataTableCell>
          <DataTableCell
            style={{ backgroundColor: "lightcyan" }}
            className={"min-w-25 max-w-25"}
          >
            <Textfit mode="multi" style={{ whiteSpace: "normal" }}>
              {item.columnReason}
            </Textfit>
          </DataTableCell>
          <DataTableCell>{item.columnBalance}</DataTableCell>
          <DataTableCell>{item.columnInstance}</DataTableCell>
          <DataTableCell>{item.columnPayed}</DataTableCell>
          <DataTableCell alignMiddle style={{ backgroundColor: "lightcyan" }}>
            {item.columnResolved}
          </DataTableCell>
          <DataTableCell className={"min-w-25 max-w-25"}>
            <Textfit mode="multi" style={{ whiteSpace: "normal" }}>
              {item.columnComment}
            </Textfit>
          </DataTableCell>
            <DataTableCell>
              <Icon className={"hover:cursor-crosshair hover:text-175 transition transition-property-all transition-timing-ease"} icon="done" iconOptions={{ size: "xsmall" }} />
              <Icon className={"hover:cursor-crosshair hover:text-175 transition transition-property-all transition-timing-ease"} icon="face" iconOptions={{ size: "xsmall" }} />
              <Icon className={"hover:cursor-crosshair hover:text-175 transition transition-property-all transition-timing-ease"} icon="highlight_off" iconOptions={{ size: "xsmall" }} />
              <Icon className={"hover:cursor-crosshair hover:text-175 transition transition-property-all transition-timing-ease"} icon="loop" iconOptions={{ size: "xsmall" }} />
            </DataTableCell>
        </DataTableRow>
      ));

    const { data } = this.state;
    const {
      columnOpen,
      columnModulo,
      columnLabel,
      columnDate,
      columnCc,
      columnReason,
      columnBalance,
      columnInstance,
      columnPayed,
      columnResolved,
      columnComment
    } = this.state;
    return (
      <Fragment>
        <div className={"flex"}>
          <Checkbox
            label={"Open"}
            checked={columnOpen}
            onChange={() => this.setState({ columnOpen: !columnOpen })}
          />
          <Checkbox
            label={"Modulo"}
            checked={columnModulo}
            onChange={() => this.setState({ columnModulo: !columnModulo })}
          />
          <Checkbox
            label={"Etiqueta "}
            checked={columnLabel}
            onChange={() => this.setState({ columnLabel: !columnLabel })}
          />
          <Checkbox
            label={"Fecha"}
            checked={columnDate}
            onChange={() => this.setState({ columnDate: !columnDate })}
          />
          <Checkbox
            label={"C/C"}
            checked={columnCc}
            onChange={() => this.setState({ columnCc: !columnCc })}
          />
          <Checkbox
            label={"Causa"}
            checked={columnReason}
            onChange={() => this.setState({ columnReason: !columnReason })}
          />
          <Checkbox
            label={"Monto"}
            checked={columnBalance}
            onChange={() => this.setState({ columnBalance: !columnBalance })}
          />
          <Checkbox
            label={"Instancia"}
            checked={columnInstance}
            onChange={() => this.setState({ columnInstance: !columnInstance })}
          />
          <Checkbox
            label={"Pagado"}
            checked={columnPayed}
            onChange={() => this.setState({ columnPayed: !columnPayed })}
          />
          <Checkbox
            label={"Resuelto"}
            checked={columnResolved}
            onChange={() => this.setState({ columnResolved: !columnResolved })}
          />
          <Checkbox
            label={"Comentario"}
            checked={columnComment}
            onChange={() => this.setState({ columnComment: !columnComment })}
          />
        </div>
        <DataTable>
          <DataTableContent>
            <TableHeads />
            <DataTableBody>
              <TableData />
            </DataTableBody>
          </DataTableContent>
        </DataTable>
      </Fragment>
    );
  }
}

export default FaltantesTable;
