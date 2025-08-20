import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin{" "}
            <i className="text-success" style={{ textDecoration: "underline" }}>
              {user?.name}
            </i>
          </h1>
          <h3 style={{ color: "red" }}>Blood Nest</h3>
          <hr />
          <p>
            Blood Nest is a comprehensive blood bank management and donation
            platform designed to bridge the gap between donors, hospitals,
            organizations, and administrators. The app streamlines the entire
            blood donation process by providing a centralized and transparent
            system where different users can interact effectively.
            <br></br>
            Donors can easily register on the platform, maintain their donation
            history, and receive timely reminders for their next eligibility to
            donate. They can also view nearby donation camps and contribute
            during emergencies. Hospitals benefit by maintaining accurate
            real-time records of their blood inventories, managing blood
            requests, and ensuring that patients receive the required blood type
            without delays.<br></br>
            Organizations can host and monitor donation drives, analyze
            participation, and collaborate with hospitals to meet urgent blood
            requirements. Administrators oversee all operations, ensuring smooth
            coordination, data accuracy, and system transparency. The platform
            supports role-based access to safeguard sensitive data and provide
            each user type with the right tools for their tasks. <br></br>
            Blood Nest enhances accessibility by enabling users to search for
            available blood types across multiple hospitals instantly. It
            reduces manual errors, prevents duplication of records, and ensures
            the efficient utilization of resources. By integrating donors,
            hospitals, and organizations on one platform, the app fosters
            collaboration and saves valuable time during critical situations.
            <br></br>
            With its intuitive interface, robust features, and focus on
            reliability, Blood Nest not only simplifies blood donation and
            management but also contributes directly to saving lives. It is a
            step toward building a smarter, more connected healthcare ecosystem
            where help is always just a few clicks away.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
