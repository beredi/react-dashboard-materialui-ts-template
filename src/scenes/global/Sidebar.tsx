import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import React, { useState } from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlined,
  HomeOutlined,
  MapOutlined,
  MenuOutlined,
  PeopleOutlined,
  PersonOutlined,
  PieChartOutlined,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

type SelectedScene =
  | "Dashboard"
  | "Manage Team"
  | "Contacts Information"
  | "Invoices Balances"
  | "Profile Form"
  | "Calendar"
  | "FAQ Page"
  | "Bar Chart"
  | "Pie Chart"
  | "Line Chart"
  | "Geography Chart";

type ItemProps = {
  title: SelectedScene;
  to: string;
  icon: React.ReactNode;
  selected: SelectedScene;
  setSelected: (selected: SelectedScene) => void;
};
const Item = ({ title, to, icon, selected, setSelected }: ItemProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};
export const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [selected, setSelected] = useState<SelectedScene>("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important}`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  m1: "15px",
                }}
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box sx={{ mb: "25px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={`../../assets/user.jpg`}
                  alt="user"
                  width="80"
                  height="80"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign={"center"}>
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{
                    m: "10px 0 0 0",
                  }}
                >
                  Ed Roh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box
            sx={{
              paddingLeft: isCollapsed ? undefined : "10%",
            }}
          >
            <Item
              title={"Dashboard"}
              to={"/"}
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{
                m: "15x 0 5px 20px",
                paddingLeft: "26px",
              }}
            >
              Data
            </Typography>
            <Item
              title={"Manage Team"}
              to={"/team"}
              icon={<PeopleOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Contacts Information"}
              to={"/contacts"}
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Invoices Balances"}
              to={"/invoices"}
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{
                m: "15x 0 5px 20px",
                paddingLeft: "26px",
              }}
            >
              Pages
            </Typography>
            <Item
              title={"Profile Form"}
              to={"/form"}
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Calendar"}
              to={"/calendar"}
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"FAQ Page"}
              to={"/faq"}
              icon={<HelpOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{
                m: "15x 0 5px 20px",
                paddingLeft: "26px",
              }}
            >
              Charts
            </Typography>
            <Item
              title={"Bar Chart"}
              to={"/bar"}
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Pie Chart"}
              to={"/pie"}
              icon={<PieChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Line Chart"}
              to={"/line"}
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Geography Chart"}
              to={"/geography"}
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};
