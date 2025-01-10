function EmployeeTable(props){
  const objProp = Object.keys(props.empData[0]);
  objProp.shift();
  return(
    <table className='w-9/12 border-separate border-[#D9D9D9]'>
      <thead>
        <tr className="bg-[#252C3A] sm:text-[8px]">
          {
            objProp.map(prop => <th className="text-white p-4" key={prop}>{prop}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          props.empData.map(emp => {
            return (
              <tr className={`text-center text-[#252C3A] ${emp.id%2? 'bg-[#F5F5F5]' : 'bg-[#E7E7E7]'} sm:text-[8px]`} key={emp.Code}>
                <td className="p-3">
                  {emp.Code}
                </td>
                <td className="p-3">
                  {emp.Name}
                </td>
                <td className="p-3">
                  {emp.Designation}
                </td>
                <td className="p-3">
                  {emp['Contact Details']}
                </td>
                <td className="text-left p-3">
                  {emp['Work Profile']}
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

function EmployeeData() {

  const empData = [
    {
      id : 1,
      Code : 26,
      Name : 'Unish Kumar',
      Designation : 'Front End Developer',
      'Contact Details' : '9099201233',
      'Work Profile' : 'Total responsibility to handle Front End work'
    },
    {
      id : 2,
      Code : 36,
      Name : 'Hari Parmar',
      Designation : '.Net Developer',
      'Contact Details' : '9898512345',
      'Work Profile' : 'Handle all .net develoment'
    },
    {
      id : 3,
      Code : 78,
      Name : 'Jigar Gor',
      Designation : 'Web & Graphic Designer',
      'Contact Details' : '9898123466',
      'Work Profile' : 'Create Website, Graphics etc.'
    },
    {
      id : 4,
      Code : 28,
      Name : 'Vikash Shah',
      Designation : '.Net Developer',
      'Contact Details' : '9898123478',
      'Work Profile' : 'Handle all .net development'
    },
    {
      id : 5,
      Code : 55,
      Name : 'Charmi Shah',
      Designation : 'SEO Executive',
      'Contact Details' : '9789552451',
      'Work Profile' : 'SEO Work'
    },
    {
      id : 6,
      Code : 70,
      Name : 'Peter Parker',
      Designation : 'SEO Executive',
      'Contact Details' : '9789552451',
      'Work Profile' : 'SEO Work'
    },
  ];

  return (
    <div className='w-full p-8 flex flex-col justify-center gap-8'>
        <p className="text-3xl text-[#252C3A] font-extrabold leading-10 uppercase text-center">Employee Details</p>
        <div className="flex overflow-x-auto md:justify-center">
          <EmployeeTable empData = {empData} />
        </div>
    </div>
  )
}

export default EmployeeData;
