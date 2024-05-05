const List = () => {
    return ( 
        <div className="background">

           <div className="Top">
           <h3> <u>List</u> Of Properties </h3>
            <button className="btns">View All Properties</button>
           </div>

            <div className="image">
                <img className="room" src="src/assets/Group 1894.png" /> 
                <img src="src/assets/Group 1890.png"  />
                <img src="src/assets/Group 1891.png" />

            </div>

            <div className="img">
                <img src="src/assets/Group 1891.png" alt="" />
                <img src="src/assets/Group 1892.png" alt="" />
                <img src="src/assets/Group 1893.png" alt="" />
            </div>

            <img className="pagination" src="src/assets/Pagination.png" alt="" />

        </div>
        
     );
}
 
export default List;