import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useState } from "react";
import useStockCall from "../../hook/useStockCall";
import { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProductsModal({ open, handleClose, initialState }) {
  const { postStockData, putStockData, getStockData } = useStockCall();

  const [info, setInfo] = useState(initialState);

  const handleChange = (e) => {
    console.log(e);
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Database info bilgisini gönderme işlemi
    if (info._id) {
      putStockData("firms", info);
    } else {
      postStockData("firms", info);
    }
  };

  const { brands } = useSelector((state) => state.stock);
  const { category } = useSelector((state) => state.stock);

 console.log("category",category);

  //useEffect didUpdate metodu tarzında çalışması. dependancy arrayde başlangıç değeri verildiğinde güncelleme yapması.
  //  useEffect(()=>{setInfo(initialState)},[initialState])

  return (
    <div>
      {/* Button modalı açıyor.Açma işlemi firms sayfasında NEw Firm yaptığı için burda pasif hale getirdik */}
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={info.name}
                label="Age"
                onChange={handleChange}
              >
                {category.map(() => (
                  <MenuItem value={10}>{category.name}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="image"
              variant="outlined"
              type="text"
              name="image"
              onChange={handleChange}
              value={info.image}
            />
            <Button
              type="submit"
              sx={{ backgroundColor: "secondary.main", color: "white" }}
            >
              {info._id ? "UPDATE" : "ADD FIRM"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
