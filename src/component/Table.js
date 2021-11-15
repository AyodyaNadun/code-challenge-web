import React, { useEffect } from "react"
import { Menu, Table, Pagination } from 'semantic-ui-react'
import { loadTags } from '../utils/loadTableData'
import { useSelector } from 'react-redux'

const TableContent = ({ pageNo, tableType }) => {
    const { searchData, pageCount } = useSelector(state => state.search)
    const handlePageNumber = (e, data) => {
        pageNo(data.activePage)
    }

    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>{tableType == "ticket" ? "Ticket id" : tableType == "organization" ? "Organization id" : "User id"}</Table.HeaderCell>
                    <Table.HeaderCell>{tableType == "ticket" ? "Type" : tableType == "organization" ? "Name" : "Name"}</Table.HeaderCell>
                    <Table.HeaderCell>{tableType == "ticket" ? "Description" : tableType == "organization" ? "Details" : "Email"}</Table.HeaderCell>
                    <Table.HeaderCell>{tableType == "ticket" ? "Subject" : tableType == "organization" ? "Url" : "Phone"}</Table.HeaderCell>
                    <Table.HeaderCell>{tableType == "ticket" ? "Priority" : tableType == "organization" ? "Shared tickets" : "Role"}</Table.HeaderCell>
                    <Table.HeaderCell>{tableType == "ticket" ? "status" : tableType == "organization" ? "External id" : "Active"}</Table.HeaderCell>
                    <Table.HeaderCell>{tableType == "ticket" ? "Tags" : tableType == "organization" ? "Tags" : "Tags"}</Table.HeaderCell>
                    <Table.HeaderCell>Organization Name</Table.HeaderCell>
                    <Table.HeaderCell>{tableType == "ticket" ? "Assignee user" : tableType == "organization" ? "Ticket subject" : "Assigned tickets"}</Table.HeaderCell>
                    <Table.HeaderCell>{tableType == "ticket" ? "Submitted user" : tableType == "organization" ? "users" : "Submitted tickets"}</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {searchData && searchData.map(data => {
                    return (
                        <Table.Row>
                            <Table.Cell>{tableType == "ticket" ? data.ticket && data.ticket._id : tableType == "organization" ? data.organization && data.organization.organization_id : data.user && data.user.user_id} </Table.Cell>
                            <Table.Cell>{tableType == "ticket" ? data.ticket && data.ticket.type : tableType == "organization" ? data.organization && data.organization.name : data.user && data.user.name}</Table.Cell>
                            <Table.Cell>{tableType == "ticket" ? data.ticket && data.ticket.description : tableType == "organization" ? data.organization && data.organization.details : data.user && data.user.email}</Table.Cell>
                            <Table.Cell>{tableType == "ticket" ? data.ticket && data.ticket.subject : tableType == "organization" ? data.organization && <a href={data.organization.url}>Link url</a> : data.user && data.user.phone}</Table.Cell>
                            <Table.Cell>{tableType == "ticket" ? data.ticket && data.ticket.priority : tableType == "organization" ? data.organization && data.organization.shared_tickets ? 'True' : 'False' : data.user && data.user.role}</Table.Cell>
                            <Table.Cell>{tableType == "ticket" ? data.ticket && data.ticket.status ? 'True' : 'False' : tableType == "organization" ? data.organization && data.organization.external_id : data.user && data.user.active ? 'True' : 'False'}</Table.Cell>
                            <Table.Cell>{loadTags(data, tableType, 1)}</Table.Cell>
                            <Table.Cell>{data.organization_name}</Table.Cell>
                            <Table.Cell>{loadTags(data, tableType, 2)}</Table.Cell>
                            <Table.Cell>{loadTags(data, tableType, 3)}</Table.Cell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
            {searchData && searchData.length > 0 ?
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='16'>
                            <Menu floated='right'>
                                <Pagination
                                    boundaryRange={0}
                                    defaultActivePage={1}
                                    ellipsisItem={null}
                                    firstItem={null}
                                    lastItem={null}
                                    siblingRange={1}
                                    totalPages={pageCount}
                                    onPageChange={handlePageNumber}
                                />
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer> : <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='16'>
                            <p style={{ textAlign: 'center' }}>Data is not avaliable</p>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            }
        </Table>
    )

}

export default TableContent