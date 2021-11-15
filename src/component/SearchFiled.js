import React, { useState, useEffect } from "react"
import _ from 'lodash'
import { Search, Grid, Dropdown } from 'semantic-ui-react'
import { tableOption } from '../assets/constant'

import { useDispatch, useSelector } from 'react-redux'
import { search, getTableField } from '../store/actions/search'

const SearchField = ({ noPage, tableName, setPageNo }) => {
    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(false)
    const [selectResult, setSelectresult] = useState('')
    const [searchResult, setSearchResult] = useState('')
    const [selectTable, setTable] = useState('')
    const [selectField, setField] = useState('')
    const { tableField } = useSelector(state => state.search)
    const [pageChange, setPageChange] = useState(false)

    useEffect(() => {
        let searchValue = {
            search_term: selectField,
            search_value: searchResult,
            page: noPage
        }
        dispatch(search(selectTable, searchValue))
    }, [searchResult, selectTable, selectField, selectResult, noPage])


    const handleSearchChange = (e, { value }) => {
        setSearchResult(value)
        setLoading(false)
        setPageNo()
    }

    const handleTableChange = (e, { value }) => {
        dispatch(getTableField(value))
        tableName(value)
        setTable(value)
    }
    const handleFieldChange = (e, { value }) => {
        setField(value)
    }


    return (
        <Grid columns={3} divided>
            <Grid.Row style={styles.searchRow}>
                <Grid.Column style={styles.searchBar}>
                    <Search
                        style={styles.searchText}
                        className="search-bar"
                        placeholder='Search here'
                        category
                        loading={isLoading}
                        onResultSelect={(e) => setSelectresult(e)}
                        onSearchChange={_.debounce(handleSearchChange, 500, {
                            leading: true,
                        })}
                        open={false}
                    />
                </Grid.Column>

                <Grid.Column>
                    <Dropdown
                        style={styles.searchDropdown}
                        placeholder='Select Table'
                        fluid
                        search
                        selection
                        onChange={handleTableChange}
                        options={tableOption}
                        />
                </Grid.Column>
                <Grid.Column>
                    <Dropdown
                        style={styles.searchDropdown}
                        placeholder='Select Field'
                        fluid
                        search
                        selection
                        onChange={handleFieldChange}
                        options={tableField}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

}

const styles = {
    searchRow:{
        padding: '25px 15px 5px 5px'
    },

    searchBar: {
        display: "flex",
        justifyContent: "flex-start",
        paddingLeft: 25,
        marginRight: 0
    },

    searchText: {
        backgroundColor: 'black',
        borderRadius: '25px'
    },
    
    searchDropdown: {
        borderColor: '#0000006e',
        borderRadius: '20px'
    }
}


export default SearchField