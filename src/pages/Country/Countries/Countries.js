import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import getContries, { delContries, getColumns } from "./ContriesLib";
import './Countries.css'

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');
    const [filtered, setFiltered] = useState([]);
    const [editRow, setEditRow] = useState({name: '', arName: ''});

    useEffect(() => {
        getContries(setCountries, setFiltered);
    }, []);

    useEffect(()=>{
        const result = countries.filter(country => {
            return country.name.toLowerCase().match(search.toLowerCase());
        }); 
        setFiltered(result);
    }, [search]);

    

    return (
        <DataTable 
            title="Countries List" 
            columns={getColumns(countries, setCountries, filtered, setFiltered, editRow, setEditRow)} 
            data={filtered } pagination fixedHeader 
            fixedHeaderScrollHeight="800px" 
            highlightOnHover 
            selectableRows 
            subHeader
            subHeaderComponent ={<input 
                className="w-25 form-control " 
                type="text" 
                placeholder="Search here .." 
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
            />}
             
        />
    );
}