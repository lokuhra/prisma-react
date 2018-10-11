import React, { Component, Fragment } from "react";

import { Button, ButtonIcon } from "@rmwc/button";
import { SimpleDataTable } from "@rmwc/data-table";
import { Textfit } from "react-textfit";
import { without, filter, keys, omit, map, values } from "rambda";

import { slice } from "ramda";

const columnas = [
  "Modulo",
  "Etiqueta",
  "Fecha",
  "C/C",
  "Causa",
  "Monto ($)",
  "Instancia",
  "Pagado",
  "Rendido",
  "Comentario"
];

class TableFaltantes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allColumns: true,
        dataLoad:false,
      dataColumns: {
        columnModulo: false,
        columnLabel: true,
        columnDate: true,
        columnCc: true,
        columnReason: true,
        columnBalance: true,
        columnInstance: true,
        columnPayed: true,
        columnResolved: true,
        columnComment: true
      },
      data: [
        {
          columnModulo: "TREN MIXTO",
          columnLabel: "BA03",
          columnDate: "08/07/2018 - DIA",
          columnCc: "7",
          columnReason:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ipsam itaque quaerat repellat tempore! Accusamus consectetur doloribus iusto officia qui quibusdam voluptates! Ad aspernatur dolore fuga minima minus optio, perspiciatis.",
          columnBalance: 29,
          columnInstance: "CUARTA",
          columnPayed: "03/10/2018 - $29",
          columnResolved: "SI",
          columnComment:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ipsam itaque quaerat"
        },
        {
          columnModulo: "CAFECITO",
          columnLabel: "CAFE01",
          columnDate: "08/07/2018 - DIA",
          columnCc: "7",
          columnReason:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ipsam itaque quaerat repellat tempore! Accusamus consectetur doloribus iusto officia qui quibusdam voluptates! Ad aspernatur dolore fuga minima minus optio, perspiciatis.",
          columnBalance: 29,
          columnInstance: "CUARTA",
          columnPayed: "03/10/2018 - $29",
          columnResolved: "SI",
          columnComment:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ipsam itaque quaerat"
        }
      ]
    };
  }
  filterData = () =>
    this.setState({
      data: map(
        omit(keys(filter(x => x === false, this.state.dataColumns))),
        this.state.data
      )
    });

  handleFilter = () => {
    this.setState({ allColumns: false });
    this.filterData();
  };

  async handleData(){
      const aaaaa = this.state.data.map(item => values(item));
      let array = aaaaa[0]
      let left = slice(0, 4, array);
      let right = slice(5, Infinity, array);
      let middle = (
          <div className={"max-w-25"}>
              <Textfit mode="multi" min={16} style={{ whiteSpace: "normal" }}>
                  {array[4]}
              </Textfit>
          </div>
      );
      let complete = [...left, middle, ...right];

    this.setState({
        dataLoad:true,
        data:complete
    })

  }

  render() {
      const aaaaa = this.state.data.map(item => values(item));

    const filterColumns = without(
      [null],
      [
        this.state.dataColumns.modulo ? "Modulo" : null,
        this.state.dataColumns.label ? "Etiqueta" : null,
        this.state.dataColumns.date ? "Fecha" : null,
        this.state.dataColumns.cc ? "C/C" : null,
        this.state.dataColumns.reason ? "Causa" : null,
        this.state.dataColumns.balance ? "Monto ($)" : null,
        this.state.dataColumns.instance ? "Instancia" : null,
        this.state.dataColumns.payed ? "Pagado" : null,
        this.state.dataColumns.resolved ? "Rendido" : null,
        this.state.dataColumns.comment ? "Comentario" : null
      ]
    );

    const tableField = () => {
      let left = slice(0, 4, aaaaa[0]);
      let right = slice(5, Infinity, aaaaa[0]);
      let middle = (
        <div className={"max-w-25"}>
          <Textfit mode="multi" min={16} style={{ whiteSpace: "normal" }}>
            {aaaaa[0][5]}
          </Textfit>
        </div>
      );
      let complete = [...left, middle, ...right];
      console.log(complete);
    };
    return (
      <Fragment>
        <SimpleDataTable
          stickyRows
          getRowProps={row => {
            return row[1] > 100 ? { activated: true } : {};
          }}
          getCellProps={(cell, index, isHead) => {
            return !isHead && index === 5 ? { style: { color: "green" } } : {};
          }}
          headers={[this.state.allColumns ? columnas : filterColumns]}
          // const columnas = ['Modulo', 'Etiqueta', 'Fecha', 'Turno', 'C/C', 'Causa', 'Monto ($)', 'Instancia','Pagado','Rendido','Comentario']
          data={this.state.dataLoad?this.state.data:aaaaa}
        />
        <Button raised onClick={() => this.handleFilter()}>
          console
        </Button>
        <Button raised onClick={() => this.handleData()}>
          aaa
        </Button>
      </Fragment>
    );
  }
}

export default TableFaltantes;
