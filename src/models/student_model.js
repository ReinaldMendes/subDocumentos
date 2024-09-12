import db from "../db.js";

const Schema = db.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  zip: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 8,
  },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
    },
    required: false,
  },
});

const Student = db.model("Student", studentSchema);

export default Student;
