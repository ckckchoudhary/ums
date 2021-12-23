import { Button, Card, Dialog, Modal } from '@mui/material';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from "redux"
import { addUser, editUser } from '../Actions/user-actions';
import { UserForm } from '../Components/UserForm';
import { User } from '../Models/User';

interface EditUserProps {
    user: User;
    editUser(name: string, age: number, id: number): void;
    currentUserId: number;
}
interface EditUserState {
    isSuccessModalOpen: boolean
}

class EditUser extends Component<EditUserProps, EditUserState> {

    constructor(props: EditUserProps) {
        super(props);
        this.state = {
            isSuccessModalOpen: false
        }
    }

    saveUser = (name: string, age: number) => {
        const { editUser, currentUserId } = this.props;
        editUser(name, age, currentUserId);
        this.setState({ isSuccessModalOpen: true });
    }

    render() {
        const { user } = this.props;
        const { isSuccessModalOpen } = this.state;

        return (
            <div>
                {user &&
                    <UserForm onSubmit={this.saveUser} name={user?.name} age={user?.age} />
                }

                {!user &&
                    <Card>
                        <p>User not found.</p>
                        <Link to="/">GO back to home</Link>
                    </Card>

                }
                {isSuccessModalOpen &&
                    <Dialog open={true} >
                        <div className='modal-inner-wrapper'>
                            <h3>User details saved successfully.</h3>
                            <Link to="/">
                                <Button>OK</Button>
                            </Link>
                        </div>
                    </Dialog>
                }
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    const currentUserId = parseInt(window.location.pathname.replace("/user/", ""))
    return {
        user: state?.users?.find((user: User) => user.id === currentUserId),
        currentUserId
    };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        editUser: (name: string, age: number, id: number) => dispatch(editUser(name, age, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);