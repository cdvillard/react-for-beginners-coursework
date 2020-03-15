import React from "react";
import { getFunName } from "./../helpers";
class StorePicker extends React.Component {
  goToStore(e) {
    e.preventDefault();
    console.log("going to store...");
  }

  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          required
          placeholder="Enter store name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store &rarr;</button>
      </form>
    );
  }
}

export default StorePicker;
