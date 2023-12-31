import Input from "./Input";
function Blaze({handleChange}) {
    return (
        <div>
            <h2 className='sidebar-title'>Blaze Fan</h2>
            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio"
                value="" name = "test2"/>
                <span className="checkmark"></span>All
              </label>
              <Input
                handleChange={handleChange}
                value="No Blaze"
                title="No Blaze"
                name = "test2"
              />
              <Input
                handleChange={handleChange}
                value="3"
                title="3 blazes"
                name = "test2"
              />
              <Input
                handleChange={handleChange}
                value="4"
                title="4 blazes"
                name = "test2"
              />
              <Input
                handleChange={handleChange}
                value="5"
                title="5 blazes"
                name = "test2"
              />
              <Input
                handleChange={handleChange}
                value="6"
                title="6 blazes"
                name = "test2"
              />
        </div>
    );
}

export default Blaze;