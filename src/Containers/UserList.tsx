import { Button, Card, Dialog, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { deleteUser } from '../Actions/user-actions';
import { UserRow } from '../Components/UserRow';
import { User } from '../Models/User';


class UserList extends Component<any> {


    handleDeleteClick = (userId: number) => {
        const { deleteUser } = this.props;
        deleteUser(userId);
    }

    render() {
        const { users } = this.props;
        return (
            <div>
                <Card>
                    <div className='home-page-header'>
                        <h2>User Management System</h2>
                        <Link to="/user/add">
                            <Button>Add New User</Button>
                        </Link>
                    </div>
                </Card>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Avatar</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>actions</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            users && users.map((user: User) => <UserRow key={user.id} user={user} onDeleteClick={this.handleDeleteClick} />)
                        }
                    </TableBody>
                </Table>

            </div>
        );
    }
}


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        deleteUser: (id: number) => dispatch(deleteUser(id))
    }
}

export const mapStateToProps = (state: any) => {
    return {
        users: state.users
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);