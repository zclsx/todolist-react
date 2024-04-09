export default function CheckBox({ checked = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer"
    >
      <input
        type="checkbox"
        className=""
        checked={checked}
        readOnly
      />
    </div>
  )
}
