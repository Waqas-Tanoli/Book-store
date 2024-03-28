import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { FaBook } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../FireBaseSetup/AuthProvider";

const SideBar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo href="#" className="">
          <div className="flex items-center justify-around">
            {user && user.photoUrl && typeof user.photoUrl === "string" && (
              <img src={user.photoUrl} alt="user" />
            )}
            <p className="text-sm">{user?.displayname || "Demo user"}</p>
          </div>
        </Sidebar.Logo>

        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/upload"
              icon={HiOutlineCloudUpload}
            >
              Upload a Book
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={FaBook}>
              Manage Books
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="/login" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiTable}>
              Sign Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};
export default SideBar;
