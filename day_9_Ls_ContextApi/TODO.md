# TODO - Fix issues in Update/Create user flow (ContextApi / react-hook-form)

- [ ] Update Form.jsx:
  - [ ] Sync `updatedData` into react-hook-form using `useEffect` + `reset(updatedData)`
  - [ ] Fix submit logic: if `updatedData` exists -> update only (no add new user)
  - [ ] Preserve `id` during update: `{ ...data, id: updatedData.id }`
  - [ ] Remove/stop incorrect `localStorage.setItem("users", JSON.stringify(data))` from Form.jsx (App.jsx already persists)
  - [ ] Improve mobile validation (use `type="text"` + `pattern` for 10 digits)

- [ ] Run `npm run dev` and manually verify:
  - [ ] Add user works
  - [ ] Update user changes correct user only
  - [ ] Refresh keeps updated users

