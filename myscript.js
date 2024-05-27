var UidV, fnameV, mnameV, sname, addressV, EaddV;

function readFom() {
  UidV = document.getElementById("Uid").value;
  fnameV = document.getElementById("fname").value;
  mnameV = document.getElementById("fname").value;
  snameV = document.getElementById("sname").value;
  addressV = document.getElementById("address").value;
  eaddV = document.getElementById("Eadd").value;
  console.log(rollV, nameV, addressV, genderV, emailV);
}
// Insert data

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      Uid: UidV,
      Fname: fnameV,
      mname: mnameV,
      Surame: snameV,   
      Address: addressV,
      Eadd: emailV
    });
  alert("Data Inserted");
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("Eadd").value = "";
};

// Read Data

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      document.getElementById("Uid").value = snap.val().Uid;
      document.getElementById("fname").value = snap.val().fname;
      document.getElementById("mname").value = snap.val().mname;
      document.getElementById("sname").value = snap.val().sname;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("eadd").value = snap.val().eadd;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   UniqueId: UidV,
      name: nameV,
      gender: genderV,
      address: addressV,
    });
  alert("Data Update");
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("eadd").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UidV)
    .remove();
  alert("Data Deleted");
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("eadd").value = "";
};