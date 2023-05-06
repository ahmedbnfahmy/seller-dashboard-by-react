import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import getData, { delData, getColumns } from "./governmentlib";
import './government.css'

export default function GetGoverment() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filtered, setFiltered] = useState([]);
    const [editRow, setEditRow] = useState({name: '', arName: ''});

    useEffect(() => {
        getData(setData, setFiltered);
    }, []);

    useEffect(()=>{
        const result = data.filter(item => {
            return item.name.toLowerCase().match(search.toLowerCase());
        }); 
        setFiltered(result);
    }, [search]);

    

    return (
        <DataTable 
            title="Governemet List" 
            columns={getColumns(data, setData, filtered, setFiltered, editRow, setEditRow)} 
            data={filtered} pagination fixedHeader 
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