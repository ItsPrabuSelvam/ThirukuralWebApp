function Footer({ input, setInput , updateBtn }) {




    return (
        <footer>
            <input
                id="num-input"
                type="number"
                placeholder="Enter the Number of Thirukkural...."
                min="1"
                max="1330"
                value={input}
                onWheel={(e) => e.target.blur()}
                onKeyUp={(e) => {
                    e.preventDefault();
                    e.target.value = parseInt(e.target.value) || ''
                }
                }
                onChange={(e) => {
                    let value = e.target.value;

                    if (value === "") {
                        setInput('');
                        return;
                    }

                    setInput(Number.parseInt(value))
                }}
            />

            <button onClick={updateBtn}>Submit</button>
        </footer>
    );
}

export default Footer;