import { Button, TableCell, TableRow } from "@mui/material";
import React from "react";
import { useStatus } from "../Hooks/UseOnlineStatus";
import { User } from "../Models/User";
import { Link } from "react-router-dom";


interface UserRowProps {
    user: User;
    onDeleteClick(userId: number): void;
}

export const UserRow: React.FC<UserRowProps> = ({ user: { name, id, age, avatar }, onDeleteClick }) => {
    const isOnline: boolean = useStatus(id);
    return (
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell>
                <img src={avatar} alt="profile-image" />
            </TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{age}</TableCell>
            <TableCell>{isOnline.toString()}</TableCell>
            <TableCell>
                <Link to={`user/${id}`}>
                    <Button>Edit</Button>
                </Link>

                <Button onClick={() => onDeleteClick(id)}>Delete</Button>
            </TableCell>
        </TableRow>
    )
}