import toast from "react-hot-toast";

export function validateClientInfo(client) {
  if (client.fullName.length === 0) {
    toast.error("Full Name is required");
    return false;
  }
  if (client.fullName.length > 140) {
    toast.error("Full Name should be less than 140 characters.");
    return false;
  }
  if (client.email.length > 255) {
    toast.error("Email Address should be less than 255 characters.");
    return false;
  }

  if (client.mobile.length < 10 || client.mobile.length > 10) {
    toast.error("Please provid valid mobile number without any prefix");
    return false;
  }

  if (client.pan.length < 10 || client.pan.length > 10) {
    toast.error("Please provid valid PAN format");
    return false;
  }
  return true;
}

export function validateAddress(address) {
  if (address.postCode.length < 6 || address.postCode.length > 6) {
    toast.error("Please provid valid post code");
    return false;
  }
  return true;
}
