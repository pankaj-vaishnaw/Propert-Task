import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import data from "../data";
import CardContainer from "./CardContainer";

import Divider from "@mui/material/Divider";


const Header = (_) => {
  const [list, setList] = useState(data);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
 
  const [price, setPrice] = useState(["", 500, 2500]);
//   const [property, setProperty] = useState([""]);

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value.split(/[$-]+/));
  };
//   const handlePropertyType = (event) => {
//     setProperty(event.target.value);
//   };

  useEffect(
    (_) => {
      //Filter based on location
      const filterList = data.filter((singleData) => {
        if (singleData.locationTitle === keyword) {
         
          return true;
          
        }
     

        return false;
      });

      setList(filterList);
    },
    [keyword]
  );
  useEffect(
    (_) => {
      //Filter based on location
      const filterList = data.filter((singleData) => {
        if (singleData.locationAddress === location) {
         
          return true;
          
        }
     

        return false;
      });

      setList(filterList);
    },
    [location]
  );
//   useEffect(
//     (_) => {
//       //Filter based on location
//       const filterList = data.filter((singleData) => {
//         if (singleData.typeOfProperty === property) {
         
//           return true;
          
//         }
     

//         return false;
//       });

//       setList(filterList);
//     },
//     [property]
//   );
  useEffect(
    (_) => {
      //Filter based on location price
      const filterList = data.filter((singleData) => {
        if (
          singleData.rentAmount >= price[1] &&
          singleData.rentAmount <= price[2]
        ) {
          return true;
        }

        return false;
      });

      setList(filterList);
    },
    [price]
  );

  return (
    <>
      <div className="main-cont">
        <div className="header-cont">
          <div className="text">
            <h1 className="heading">Search Properties to Rent</h1>
          </div>
          <Box sx={{ width: 350, marginLeft: "26rem" }} size="small">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Search with SearchBar
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Search with SearchBar"
                value={keyword}
                onChange={handleChange}
              >
                {data.map((item, idx) => {
                  return (
                    <MenuItem value={`${item.locationTitle}`} key={idx}>
                      {item.locationTitle}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="price-input">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",

              border: (theme) => `1.5px solid ${theme.palette.divider}`,
              borderRadius: 1,
              bgcolor: "background.paper",
              color: "text.secondary",
              "& svg": {
                m: 1.5,
              },
              "& hr": {
                mx: 0.5,
              },
            }}
          >
            <div className="price-cont">
              <Stack spacing={6} direction="row" >
                 <label htmlFor="price">Location</label>
                 <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="location"
                value={location}
                onChange={handleLocation}
                
              >
                {data.map((item, idx) => {
                  return (
                    <MenuItem value={`${item.locationAddress}`} key={idx}>
                      {item.locationAddress}
                    </MenuItem>
                  );
                })}
                 </Select>
                <Divider orientation="vertical" variant="middle" flexItem />
                <label htmlFor="Date">When</label>
                <input type='date'/>
                <Divider orientation="vertical" variant="middle" flexItem />
                <label htmlFor="price">Price</label>
                <br />
                <select id="price" name="price" onChange={handlePriceChange}>
                  <option value="$500-$2500">$500-$2500</option>
                  <option value="$2500-$5000">$2500-$5000</option>
                  <option value="$5000-$7500">$5000-$7500</option>
                  <option value="$7500-$10000">$7500-$10,000</option>
                </select>
                <Divider orientation="vertical" variant="middle" flexItem />
                <label htmlFor="property-type">Property type</label>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="location"
                value={keyword}
                onChange={handleChange}
                
              >
                {data.map((item, idx) => {
                  return (
                    <MenuItem value={`${item.locationTitle}`} key={idx}>
                      {item.locationTitle}
                    </MenuItem>
                  );
                })}
                 </Select>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Button variant="contained" sx={{ backgroundColor: "#7065F2" }}>
                  Search
                </Button>
              </Stack>
            </div>
          </Box>
        </div>
      </div>
   

      <CardContainer list={list} />
    </>
  );
};

export default Header;
