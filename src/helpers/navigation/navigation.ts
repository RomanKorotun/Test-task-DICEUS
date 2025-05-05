import { FiHome } from "react-icons/fi";
import { GoDatabase } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { VscKey } from "react-icons/vsc";

const navigation = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: FiHome,
  },
  {
    label: "Accounts",
    path: "/accounts",
    icon: GoDatabase,
  },
  {
    label: "Brokers",
    icon: FiUsers,
  },
  {
    label: "Submissions",
    icon: FiHome,
  },
  {
    label: "Organizations",
    icon: FiHome,
  },
  {
    label: "Goals & Rules",
    icon: FiHome,
  },
  {
    label: "Admin",
    icon: VscKey,
  },
];

export default navigation;
