const Box = (props) => {
  //  Write your code here.
  const { className, boxName } = props;
  return (
    <div className={`${className} box`}>
      <span className="text">{boxName}</span>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="container">
      <h1 className="heading">Boxes</h1>
      <div className="box-container">
        <Box className="smallBox" boxName="small" />
        <Box className="mediumBox" boxName="medium" />
        <Box className="largeBox" boxName="large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
