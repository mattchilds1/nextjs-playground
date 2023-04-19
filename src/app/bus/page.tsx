
const Bus = async () => {
    await delay(1000);
  return <div>add a bus name to the path to see specifics about a bus</div>
}

export default Bus


const delay = (delayInms: number | undefined) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }