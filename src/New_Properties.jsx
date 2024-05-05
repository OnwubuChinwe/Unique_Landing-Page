const NewProperties = () => {
    return ( 
        <div>
            <p>Your Properties With Us And Be Confident That Your Room Will Be Filled Out!</p>
            <h3>Add New Properties</h3>
            <div className="texts">
                Name* <br />
                <input type="text" placeholder="Enter Name"/>
                 <br />
                 City* <br />
                <select name="" id="">
                    <option value="City">Select City</option>
                </select>
                <br />
                Price* <br />
                <input type="text" placeholder="Enter Price" />
                <br />
                Description* <br />
                <textarea name="" id="" cols="50" rows="3"></textarea>                
            </div>
        </div>
     );
}
 
export default NewProperties;