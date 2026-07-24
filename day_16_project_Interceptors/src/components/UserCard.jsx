import React from 'react';
import { MapPin, Phone, Mail, User, Shield } from 'lucide-react';

const UserCard = (props) => {
    const { id, name: { firstname, lastname }, username, email, password, phone, address: { number, street, city, zipcode, geolocation: { lat, long}} } = props.user
  // Provided user data
//   const user = {
//     id: 1,
//     name: {
//       firstname: "john",
//       lastname: "doe"
//     },
//     username: "johnd",
//     email: "john@gmail.com",
//     password: "m38rmF$",
//     phone: "1-570-236-7033",
//     address: {
//       number: 7682,
//       street: "new road",
//       city: "kilcoole",
//       zipcode: "12926-3874",
//       geolocation: {
//         lat: "-37.3159",
//         long: "81.1496"
//       }
//     }
//   };

  // Capitalize first letter helper
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-gray-200 my-6 font-sans">
      {/* Header Banner */}
      <div className="bg-linear-to-r from-blue-500 to-indigo-600 h-24 flex items-end justify-between px-6 pb-2">
        <span className="text-white text-xs font-mono opacity-75">ID: #{id}</span>
        <span className="text-white text-xs font-semibold bg-white/20 px-2 py-0.5 rounded-full">Active User</span>
      </div>

      <div className="p-6 relative">
        {/* Profile Avatar & Name */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center text-indigo-600 text-xl font-bold uppercase border-2 border-white shadow-md -mt-14 bg-white">
            {firstname[0]}{lastname[0]}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 tracking-wide">
              {capitalize(firstname)} {capitalize(lastname)}
            </h2>
            <p className="text-sm text-gray-500">@{username}</p>
          </div>
        </div>

        {/* Contact & Credentials Info */}
        <div className="space-y-3 border-t border-b border-gray-100 py-4 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Mail className="w-4 h-4 mr-3 text-indigo-500 shrink-0" />
            <span className="truncate">{email}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Phone className="w-4 h-4 mr-3 text-indigo-500 shrink-0" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm bg-gray-50 p-2 rounded border border-gray-100">
            <Shield className="w-4 h-4 mr-3 text-amber-500 shrink-0" />
            <span className="font-mono text-xs">Password: <span className="text-gray-800 font-semibold">{password}</span></span>
          </div>
        </div>

        {/* Address Info */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center">
            <MapPin className="w-3 h-3 mr-1 text-gray-400" /> Address Details
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed pl-4">
            {number} {capitalize(street)},<br />
            {capitalize(city)} - {zipcode}
          </p>
          
          {/* Coordinates badge */}
          <div className="mt-2 pl-4 flex gap-2">
            <span className="inline-block bg-gray-100 text-gray-600 font-mono text-[10px] px-2 py-0.5 rounded">
              Lat: {lat}
            </span>
            <span className="inline-block bg-gray-100 text-gray-600 font-mono text-[10px] px-2 py-0.5 rounded">
              Long: {long}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
