import _ from 'lodash'
import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import TableContent from "../../component/Table"
import SearchField from "../../component/SearchFiled"

const Home = () => {
    const [page, setPage] = useState(1)
    const [table, setTable] = useState('')
    const pageHandle = (pageNo) => {
        setPage(pageNo)
    }
    const tableHandle = (tableName) => {
        setTable(tableName)
    }
    return (
        <>
            <SearchField noPage={page} tableName={tableHandle} setPageNo={() => setPage(1)} />
            <div style={styles.mainContanier}>
                <TableContent pageNo={pageHandle} tableType={table} />
            </div>
        </>
    )

}

const styles = {
    mainContanier: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 30
    }
}

export default Home