import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    editEmployee: (state, action) => {
      const { id, ...updatedEmployee } = action.payload;
      const index = state.employees.findIndex(emp => emp.id === id);
      if (index !== -1) {
        state.employees[index] = { ...state.employees[index], ...updatedEmployee };
      }
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(emp => emp.id !== action.payload.id);
    },
  },
});

export const { addEmployee, editEmployee, deleteEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
