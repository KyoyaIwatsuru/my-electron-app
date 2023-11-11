const counter = document.getElementById('counter')

window.electronAPI.onUpdateCounter((event, value) => {
  const oldValue = Number(counter.innerText)
  const newValue = oldValue + value
  counter.innerText = newValue.toString()
  event.sender.send('counter-value', newValue)
})