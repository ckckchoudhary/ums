import { Button, Dialog } from '@mui/material';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from "redux"
import { addUser } from '../Actions/user-actions';
import { UserForm } from '../Components/UserForm';
import { User } from '../Models/User';

interface AddUserState {
    isSuccessModalOpen: boolean
}

class AddUser extends Component<any, AddUserState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isSuccessModalOpen: false
        }
    }
    saveUser = (name: string, age: number) => {
        const { addUser } = this.props;
        const id = Math.floor(100000000 + Math.random() * 900000000);
        const user: User = {
            avatar: `https://avatars.dicebear.com/api/male/${id}.svg`,
            id,
            name,
            age
        };
        addUser(user);
        this.setState({ isSuccessModalOpen: true });
    }

    render() {
        const { isSuccessModalOpen } = this.state;
        return (
            <div>
                <UserForm onSubmit={this.saveUser} />
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
    return { ...state };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addUser: (user: User) => dispatch(addUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);