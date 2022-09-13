import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import "./App.css";
import firstpage from "@material-ui/icons/FirstPage";
import lastpage from "@material-ui/icons/LastPage";
import clear from "@material-ui/icons/Clear";
import chevronLeft from "@material-ui/icons/ChevronLeft";
import chevronRight from "@material-ui/icons/ChevronRight";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

function App() {
  const [data, setData] = useState([]);
  const columns = [
    { field: "date", title: "Date" },
    { field: "localName", title: "Local Name" },
    { field: "name", title: "Name" },
    { field: "countryCode", title: "Country Code" },
    { field: "fixed", title: "Fixed" },
    { field: "global", title: "Global" },
    { field: "counties", title: "Counties" },
    { field: "launchYear", title: "Launch Year" },
    { field: "type", title: "Type" },
  ];

  useEffect(() => {
    fetch("https://date.nager.at/api/v2/publicholidays/2022/GB")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setData(resp);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="heading" align="center">
        {" "}
        <img
          className="FlagImage"
          src="https://cdn.webshopapp.com/shops/94414/files/54956666/the-united-kingdom-flag-icon-free-download.jpg"
          alt="UK Flag"
        />
        UK Public Holidays
        <img
          className="FlagImage"
          src="https://cdn.webshopapp.com/shops/94414/files/54956666/the-united-kingdom-flag-icon-free-download.jpg"
          alt="UK Flag"
        />
      </h1>
      <MaterialTable
        title={"Holidays in UK"}
        data={data}
        columns={columns}
        icons={{
          FirstPage: firstpage,
          LastPage: lastpage,
          ResetSearch: clear,
          NextPage: chevronRight,
          PreviousPage: chevronLeft,
          Add: AddBox,
          Check: Check,
          Delete: DeleteOutline,
          Edit: Edit,
          Export: SaveAlt,
          Filter: FilterList,
          Search: Search,
          SortArrow: ArrowDownward,
          ThirdStateCheck: Remove,
          ViewColumn: ViewColumn,
        }}
        options={{
          headerStyle: {
            position: "sticky",
            top: 0,
            backgroundColor: "#3f51b5",
            color: "#FFFF",
            fontWeight: "bold",
          },
          maxBodyHeight: 500,
        }}
      />
    </div>
  );
}

export default App;
