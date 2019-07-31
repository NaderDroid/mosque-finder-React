import React from 'react'

export default (props) => {
    return (
        <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
                <div className="form-group col-md-6">
                    <input type="password" className="form-control" id="inputPassword4"
                           placeholder="Password"/>
                </div>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" id="inputAddress2"
                       placeholder="Apartment, studio, or floor"/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="form-group col-md-4">
                    <select id="inputState" className="form-control">
                        <option selected>Holds Jumm'ah</option>
                        <option>Does not hold Jumm'ah</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>

    );
}

