import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import uwinLogo from "./uwindsor_logo.png";

const navLinks = [
  { label: "DashBoard", to: "/" },
  { label: "Events", to: "/Events" },
  { label: "Complaints", to: "/Complaints" },
  { label: "Attendance", to: "/Attendance" },
  { label: "Records", to: "/Records" },

];
function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function handleLogout() {
    // Clear user session and redirect to login page
    localStorage.clear();
    window.location.href = "/login";
  }

  const img = {
    maxWidth: "100%",
    height: "auto",
    width: "auto",
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <div style={img}>
              <img
                src={uwinLogo}
                alt="Logo"
                style={{ height: "40px", marginRight: "16px" }}
              />
            </div>{" "}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {navLinks.map((link) => (
                <MenuItem
                  key={link.label}
                  component={Link}
                  to={link.to}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: location.pathname === link.to ? "secondary.main" : "",
                    backgroundColor: location.pathname === link.to ? "secondary.light" : "",
                    borderRadius: "10px",
                  }}
                  
                >
                  {link.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                component={Link}
                to={link.to}
                sx={{
                  color: location.pathname === link.to ? "black" : "inherit",
                  backgroundColor: location.pathname === link.to ? "white" : "transparent",

                }}
                
              >
                {link.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;