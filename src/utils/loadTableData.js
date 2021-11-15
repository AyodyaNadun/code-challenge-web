
import React from 'react'

export const loadTags = (data, tableType, index) => {
    switch (tableType) {
        case 'user':
            if (index == 1) {
                return data.user && data.user.tags.map(res => {
                    return (
                        <>
                            <br />
                            {res}
                        </>
                    )
                })
            } else if (index == 2) {
                return data.assigned_tickets && data.assigned_tickets.map(res => {
                    return (
                        <>
                            <br />
                            {res.subject}
                        </>
                    )
                })
            }
            else {
                return data.submitted_tickets && data.submitted_tickets.map(res => {
                    return (
                        <>
                            <br />
                            {res.subject}
                        </>
                    )
                })
            }
        case 'ticket': {
            if (index == 1) {
                return data.ticket && data.ticket.tags.map(res => {
                    return (
                        <>
                            <br />
                            {res}
                        </>
                    )
                })
            } else if (index == 2) {
                return data && data.assignee_user
            }
            else {
                return data && data.submitted_user
            }
        }

        case 'organization': {
            if (index == 1) {
                return data.organization && data.organization.tags.map(res => {
                    return (
                        <>
                            <br />
                            {res}
                        </>
                    )
                }
                )
            } else if (index == 2) {
                return data.ticket_subject && data.ticket_subject.map(res => {
                    return (
                        <>
                            <br />
                            {res.subject}
                        </>
                    )
                }
                )
            } else {
                return data.users && data.users.map(res => {
                    return (
                        <>
                            <br />
                            {res.name}
                        </>
                    )
                }
                )
            }
        }
    }
}