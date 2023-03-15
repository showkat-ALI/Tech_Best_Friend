import Image from "next/image";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import responsiveStyle from "../../../../../styles/ContactStyle.module.css";
import DeleteUserConfirmModal from "./DeleteUserConfirmModal";
import EditUserModal from "./EditUsersModal";

type UsersTableProps = {
    users: any[];
};

const UsersTable = (props: UsersTableProps) => {
    const { users } = props;
    console.log(props);
    return (
        <div
            className={` ${responsiveStyle.responsiveTable} overflow-x-scroll lg:overflow-x-auto md:w-full shadow-md sm:rounded-lg mt-12`}
        >
            <table className={`w-full text-[16px] md:text-[18px] text-left`}>
                <thead className="text-[#ADB5BD] font-normal">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Profile
                        </th>
                        <th scope="col" className="py-3 px-6 text-center">
                            Contact
                        </th>
                        <th scope="col" className="py-3 px-6 text-center">
                            Email ID
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Country
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                        <th scope="col" className="py-3 px-6 text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="text-[#232D42]">
                    {users.map(
                        ({
                            _id,
                            firstName,
                            lastName,
                            avatar,
                            email,
                            phone,
                            country,
                            status,
                            userName = "",
                        }) => (
                            <UserTableRow
                                key={_id}
                                profile={{ avatar, firstName, lastName, userName }}
                                id={_id}
                                contact={phone}
                                country={country}
                                email={email}
                                status={status}
                            />
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;

type UsersTableRowProps = {
    profile: {
        avatar: string;
        firstName: string;
        lastName: string;
        userName: string;
    };
    id: string;
    contact: string;
    email: string;
    country: string;
    status: string;
};

const UserTableRow = (props: UsersTableRowProps) => {
    const {
        profile: { firstName, lastName, avatar, userName },
        id,
        contact,
        email,
        country,
        status,
    } = props;
    const [showDeleteUserConfirmModal, setShowDeleteUserConfirmModal] =
        useState(false);
    const [showEditUserModal, setShowEditUserModal] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState("");

    const handleClose = () => {
        setShowDeleteUserConfirmModal(false);
        setSelectedUser("");
    };
    const handleDeleteUser = (id: string) => {
        setShowDeleteUserConfirmModal(true);
        setSelectedUser(id);
    };
    const handleCloseEditUserModal = () => setShowEditUserModal(false);

    return (
        <tr className="border-b">
            <DeleteUserConfirmModal
                show={showDeleteUserConfirmModal}
                handleClose={handleClose}
                userId={selectedUser}
            />
            {showEditUserModal && (
                <EditUserModal
                    show={showEditUserModal}
                    handleClose={handleCloseEditUserModal}
                    user={{ id, firstName, lastName, avatar, userName, email, contact, status }}
                />
            )}
            <td scope="row" className="py-4 px-6">
                <div className="flex space-x-2">
                    <div className="lg:w-[60px] relative w-[40px] lg:h-[60px] h-[40px] ">
                        <Image
                            className="w-full h-full rounded-md"
                            src={avatar}
                            alt=""
                            layout="fill"
                        />
                    </div>
                    <div>
                        <h2 className="text-[16px] md:text-[18px] text-[#232D42] font-medium">
                            {firstName} {lastName}
                        </h2>
                        <p className="text-[16px] text-[#8A92A6]">{userName}</p>
                    </div>
                </div>
            </td>
            <td className="py-4 px-6 text-center">{contact}</td>
            <td className="py-4 px-6 text-center">{email}</td>
            <td className="py-4 px-6 text-center">{country}</td>
            <td className="py-4 px-6">
                <button
                    className={`rounded-xl px-2 py-1 text-[12px]
           ${(status === "Active" && "text-[#3A57E8]") ||
                        (status === "pending" && "text-[#F16A1B]") ||
                        (status === "hold" && "text-white") ||
                        (status === "complete" && "text-[#1AA053]") ||
                        (status === "inactive" && "text-[#C03221]")
                        } 
           ${(status === "Active" && "bg-[#EBEEFD]") ||
                        (status === "pending" && "bg-[#FCE1D1]") ||
                        (status === "hold" && "bg-[#3A57E8]") ||
                        (status === "complete" && "bg-[#D5EBDF]") ||
                        (status === "inactive" && "bg-[#F2D6D3]")
                        } 
           `}
                >
                    {status}
                </button>
            </td>
            <td className="py-4 px-6">
                <div className="flex justify-center space-x-6">
                    <button
                        onClick={() => setShowEditUserModal(true)}
                        className="w-[32px] h-[32px] flex justify-center items-center text-white rounded-full bg-[#3A57E8] "
                    >
                        <BiEditAlt />
                    </button>
                    {/* <button
            className="w-[32px] h-[32px] flex justify-center items-center text-white rounded-full bg-[#3A57E8] "
            onClick={() => setShowEditUserModal(true)}
          >
            <BiEditAlt />
          </button> */}
                    <button
                        onClick={() => handleDeleteUser(id)}
                        className="w-[32px] h-[32px] flex justify-center items-center text-white rounded-full bg-[#3A57E8] "
                    >
                        <AiOutlineDelete />
                    </button>
                </div>
            </td>
        </tr>
    );
};
