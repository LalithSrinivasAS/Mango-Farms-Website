import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShippingAddress.css';
import { useLocation } from 'react-router-dom';

function ShippingAddress() {
    const location = useLocation();
    const { total } = location.state || {};

    useEffect(() => {
        // Initialize with default addresses
        const defaultAddresses = [
            {
                name: "venkat dinesh",
                number: "9348545478",
                pincode: "516173",
                houseNumber: "14/75",
                area: "mydukur",
                landmark: "Near temple",
                town: "kadapa",
                state: "Andhra Pradesh"
            },
            {
                name: "Sai Upesh",
                number: "9649534898",
                pincode: "518301",
                houseNumber: "5/1284",
                area: "adoni",
                landmark: "Near petrol bunk",
                town: "adoni",
                state: "Andhra Pradesh"
            },
            {
                name: "naresh",
                number: "6356458958",
                pincode: "548589",
                houseNumber: "9/45",
                area: "gadhi road",
                landmark: "Near School",
                town: "madanapalle",
                state: "Andhra Pradesh"
            }
        ];
        setAddresses(defaultAddresses);
    }, []);

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [pincode, setPincode] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [area, setArea] = useState("");
    const [landmark, setLandmark] = useState("");
    const [town, setTown] = useState("");
    const [state, setState] = useState("");
    const [addresses, setAddresses] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editIndex, setEditIndex] = useState(-1);
    const [selectedAddress, setSelectedAddress] = useState(null);

    const navigate = useNavigate();

    function onNameChange(event) {
        setName(event.target.value);
    }

    function onNumberChange(event) {
        setNumber(event.target.value);
    }

    function onPincodeChange(event) {
        setPincode(event.target.value);
    }

    function onHouseNumberChange(event) {
        setHouseNumber(event.target.value);
    }

    function onAreaChange(event) {
        setArea(event.target.value);
    }

    function onLandmarkChange(event) {
        setLandmark(event.target.value);
    }

    function onTownChange(event) {
        setTown(event.target.value);
    }

    function onStateChange(event) {
        setState(event.target.value);
    }

    function initialAddAddress() {
        setShowModal(true);
        setEditIndex(-1); // Reset edit index
    }

    function addAddress() {
        if (name.trim() !== "" && houseNumber.trim() !== "" && area.trim() !== "" && town.trim() !== "" && state.trim() !== "" && pincode.trim() !== "" && number.trim() !== "") {
            const newAddress = {
                name,
                number,
                pincode,
                houseNumber,
                area,
                landmark,
                town,
                state
            };
            if (editIndex >= 0) {
                const updatedAddresses = addresses.map((addr, index) =>
                    index === editIndex ? newAddress : addr
                );
                setAddresses(updatedAddresses);
                setEditIndex(-1);
            } else {
                setAddresses([...addresses, newAddress]);
            }
            // Clear the fields
            setName("");
            setNumber("");
            setPincode("");
            setHouseNumber("");
            setArea("");
            setLandmark("");
            setTown("");
            setState("");
            setShowModal(false);
        } else {
            alert("Please fill all the necessary fields");
        }
    }

    function editAddress(index) {
        const address = addresses[index];
        setName(address.name);
        setNumber(address.number);
        setPincode(address.pincode);
        setHouseNumber(address.houseNumber);
        setArea(address.area);
        setLandmark(address.landmark);
        setTown(address.town);
        setState(address.state);
        setShowModal(true);
        setEditIndex(index);
    }

    function removeAddress(index) {
        const updatedAddresses = addresses.filter((_, addrIndex) => addrIndex !== index);
        setAddresses(updatedAddresses);
    }

    function handleSelectAddress(index) {
        setSelectedAddress(addresses[index]);
    }

    function handleProceed() {
        if (selectedAddress) {
            navigate('/Paymentpage', { state: { address: selectedAddress, total } });
        } else {
            alert("Please select an address.");
        }
    }

    return (
        <div className='shipping-address-container'>
            <div className='content'>
                <center>
                    <h1 style={{ position: "relative", left: "-30px" }}>Saved Addresses</h1>
                    <hr style={{ position: "relative", left: "-30px" }} />
                </center>
                <button onClick={initialAddAddress} className='btn btn-addAddress'>ADD NEW ADDRESS</button>
                {showModal && (
                    <div className='modal'>
                        <div className='modal-content'>
                            <h2>{editIndex >= 0 ? "Edit Address" : "Add a new Address"}</h2>
                            <label htmlFor='name-container'>Full Name (First and last Name) :</label>
                            <input
                                type='text'
                                value={name}
                                id='name-container'
                                onChange={onNameChange}
                                required
                            />
                            <label htmlFor='mobile-number-container'>Mobile Number :</label>
                            <input className='inputk'
                                type='text'
                                value={number}
                                onChange={onNumberChange}
                                id='mobile-number-container'
                                pattern="[1-9]{1}[0-9]{9}"
                                maxLength="10"
                                required
                            />
                            <label htmlFor='pincode-container'>Pincode :</label>
                            <input className='inputk'
                                type='text'
                                value={pincode}
                                onChange={onPincodeChange}
                                id='pincode-container'
                                pattern="[0-9]{6}"
                                maxLength="6"
                                required
                            />
                            <label htmlFor='house-number-container'>Flat, House Number :</label>
                            <input className='inputk'
                                type='text'
                                value={houseNumber}
                                onChange={onHouseNumberChange}
                                id='house-number-container'
                                pattern="[0-9][a-z][A-Z]{}"
                                maxLength="100"
                                required
                            />
                            <label htmlFor='area-container'><b>Area, Street, Village:</b></label>
                            <input className='inputk'
                                type='text'
                                value={area}
                                onChange={onAreaChange}
                                id='area-container'
                                pattern="[0-9][a-z][A-Z]{}"
                                maxLength="100"
                                required
                            />
                            <label htmlFor='landmark-container'>Landmark:</label>
                            <input className='inputk'
                                type='text'
                                value={landmark}
                                placeholder='E.g. near apollo hospital'
                                onChange={onLandmarkChange}
                                id='landmark-container'
                                pattern="[0-9][a-z][A-Z]{}"
                                maxLength="30"
                            />
                            <label htmlFor='town-container'>Town:</label>
                            <input className='inputk'
                                type='text'
                                value={town}
                                onChange={onTownChange}
                                id='town-container'
                                pattern="[0-9][a-z][A-Z]{}"
                                maxLength="30"
                                required
                            />
                            <label htmlFor='state-container'>State:</label>
                            <input className='inputk'
                                type='text'
                                value={state}
                                onChange={onStateChange}
                                id='state-container'
                                pattern="[0-9][a-z][A-Z]{}"
                                maxLength="30"
                                required
                            />
                            <div className='edit-buttons'>
                                <button className='buttonk' onClick={addAddress}>{editIndex >= 0 ? "Save Changes" : "Add Address"}</button>
                                <button className="buttonk" onClick={() => setShowModal(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}
                <div className='right-shipping-addresses'>
                    <div>
                        {addresses.map((addr, index) => (
                            <div key={index} className='address-item' onClick={() => handleSelectAddress(index)}>
                                <input
                                    type='radio'
                                    name='select'
                                    checked={selectedAddress === addr}
                                    onChange={() => handleSelectAddress(index)}
                                    className='radio-buttonk'
                                />
                                <div className='address-content'>
                                <div>
                                    <div><b>name:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>{addr.name}</b></div>
                                    <div><b>Door_no:</b>&nbsp;{addr.houseNumber}</div>
                                    <div><b>Area:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{addr.area}</div>
                                    <div><b>Landmark:</b>{addr.landmark}</div>
                                    <div><b>State:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{addr.town},{addr.state}</div>
                                    <div><b>Pincode:</b>&nbsp;&nbsp; {addr.pincode}</div>
                                    <div><b>Number:</b>&nbsp;&nbsp;&nbsp;{addr.number}</div>
                                    <span className='edit-buttons'>
                                        <button className='buttonk' onClick={() => editAddress(index)}>Edit</button>
                                        <button className='buttonk' onClick={() => removeAddress(index)}>Remove</button>
                                    </span>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button  onClick={handleProceed} style={{position:"relative",top:"-80px",width:"200px"}} className='button_Proceed'>Proceed</button>
                
            </div>
        </div>
    );
}

export default ShippingAddress;
