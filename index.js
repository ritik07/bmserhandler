exports.erhandler = function (code, context) {
  let msg;

  switch (code) {
    // NOTE: ----------- CRUD HANDLING -----------

    case 100:
      msg = `${context === undefined ? "" : context}All Record Found`;
      return msg;

    case 101:
      msg = `${context === undefined ? "" : context}Record Added successfully`;
      return msg;

    case 102:
      msg = `${
        context === undefined ? "" : context
      }Record Updated successfully`;
      return msg;

    case 103:
      msg = `${
        context === undefined ? "" : context
      }Record Deleted successfully`;
      return msg;

    // NOTE: ----------- ERROR HANDLING -----------

    case 104: //MIN AND MAX CODE
      msg = `Minimum required ${
        context === undefined ? "" : context
      } code length is 2 and maximum is 10`;
      return msg;

    case 105: //code alreaady
      msg = `${context === undefined ? "" : context} code Already Exists`;
      return msg;

    case 106: //name alreaady
      msg = `${context === undefined ? "" : context} name Already Exists`;
      return msg;

    case 107: //not found
      msg = `${context === undefined ? "" : context} Not Found!!`;
      return msg;

    case 108: //MIN AND MAX NAME
      msg = `Minimum required ${
        context === undefined ? "" : context
      } Name length is 2 and maximum is 10`;
      return msg;

    case 109:
      msg = `Can't Delete !! Further Entry exists in ${
        context === undefined ? "" : context
      }`;
      return msg;

    case -9999:
      msg = `${context === undefined ? "" : context}`;
      return msg;

    default:
      break;
  }
};
