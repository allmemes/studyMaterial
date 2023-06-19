import './App.css';
import { useState } from 'react';
// import { Greet } from './components/Greet';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status'
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { ButtonWithOuterEvent } from './components/ButtonWithOuterEvent';
// import { ButtonWithPrivateEvent } from './components/ButtonWithPrivateEvent';
// import { Input } from './components/Input';
// import { Container } from './components/Container';
// import { Login } from './components/state/Login';
// import { User } from './components/state/User';
// import { User2 } from './components/state/User2';
// import { Counter } from './components/state/Counter';
// import { ThemeContextProvider } from './components/context/TemeContext';
// import { Box } from './components/context/Box';
// import { OuterContext } from './components/context/ContextPractice/OuterContext';
// import { UserContextProvide } from './components/context/UserContext';
// import { User } from './components/context/User';
// import { DomRef } from './components/ref/DomRef';
// import { MutableRef } from './components/ref/MutableRef';
// import { Counter } from './components/class/Counter';
// import { Private } from './components/auth/Private';
// import { Profile } from './components/auth/Profile';
// import { List } from './components/generics/List';
// import { RandomNumber } from './components/restriction/RandomNumber';
// import { Toast } from './components/templateLiteral.tsx/Toast';
// import { CustomButton } from './components/html/button';
// import { CustomedInput } from './components/html/input';
// import { Text } from './components/polymorphic/text';
// import { ListGroup } from './components/reactPractice/ListGroup';
// import { MyButton } from './components/reactPractice/MyButton';
import { Map } from './components/leaflet/Map';
// import { Form } from './components/reactPractice/Form';
// import { Mounting } from './components/lifeCycle/mounting';
// import { Updating } from './components/lifeCycle/updating';
// import { FragmentDemo } from './components/reactPractice/Fragments';
// import { MyPureComp } from './components/reactPractice/MyPureComp';
// import { MemorizedComp } from './components/reactPractice/MemoComp';
// import { RccRef } from './components/ref/RccRef';
// import { FwRef } from './components/ref/FwRef';
// import { ErrorBound } from './components/reactPractice/ErrorBound';
// import { ErrorChildren } from './components/reactPractice/ErrorChildren';
// import WrappedClikckComponent from './components/HOC/ClickCounter';
// import WrappedHoverComponent from './components/HOC/HoverCounter';
// import { UserProvider } from './components/context/ContextDemo/userContext';
// import { CompA } from './components/context/ContextDemo/CompA';
// import { GetList } from './components/HttpCalls/GetList';
// import { PostForm } from './components/HttpCalls/Post';
// import { ArrState } from './components/state/ArrState';
// import { EffectCounter } from './components/effect/EffectCounter';
// import { HookMouse } from './components/effect/HookMouse';
// import { EffectHttpCall } from './components/state/EffectHttpCall';
// import { CallbackParent } from './components/callback/callBackParent';
// import { UseMemoHook } from './components/reactPractice/UseMemoHook';





function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne"
  // }

  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne"
  //   },
  //   {
  //     first: "Nancy",
  //     last: "Timber"
  //   },
  //   {
  //     first: "Cann",
  //     last: "Diana"
  //   }
  // ]

  // const handleSelect = (item: string) => {
  //   console.log(item);
  // }

  const [myName, updateName] = useState("Hang");

  return (
    <div className="App"> 
      {/* 1, Basic component props */}
      {/* <Greet name={"Hang"}
             age={10}
             isLoggedin={true} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}
      {/* <Status status={"fail"}/> */}
      {/* <Heading>Place Holding Text</Heading> */}
      {/* <Oscar> 
        <h1>This is Oscar!</h1>
      </Oscar> */}


      {/* 2, Event props */}
      {/* <ButtonWithOuterEvent handleClick = {
        (e, id)=>{
          for (let i = 0; i < id; i++) console.log(e);
        }
      }/> */}
      {/* <ButtonWithPrivateEvent times={3} message={"Hello"}/> */}
      {/* <Input id={"myInput"}/> */}


      {/* 3, Style props */}
      {/* <Container style={{border: '1px solid black'}}/> */}


      {/* 4, useState hook */}
      {/* <Login/> */}
      {/* <User/> */}
      {/* <User2/> */}
      {/* <ArrState></ArrState> */}

 
      {/* 5, useReducer hook */}
      {/* <Counter/> */}


      {/* 6, useContext hook */}
      {/* <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider> */}
      {/* <OuterContext></OuterContext> */}
      {/* <UserContextProvide>
        <User></User>
      </UserContextProvide> */}

      {/* start enclosing the components under context for value sharing. But this is not required if context has its initial default value. */}
      {/* <UserProvider value={"I am the shared value from app"}>
        <CompA></CompA>
      </UserProvider> */}


      {/* 7, useRef hooks */}
      {/* <DomRef></DomRef> */}
      {/* <MutableRef></MutableRef> */}

      
      {/* 8, Class component */}
      {/* <Counter message={"Hello"}></Counter> */}
      {/* <Private isLoggedIn={true} Component={Profile}></Private> */}


      {/* 9, Generic types: a self defined component that accepts multiple types */}
      {/* <List items={["Hang", "Amy", "Meredith"]} onClick={(item) => console.log(item)}/>
      <List items={[1,2,3]} onClick={(item) => console.log(item)}/> */}
      {/* <List items={[{id: 1}, {id:2}]} onClick={(item) => console.log(item)}/>  */}


      {/* 10, Restrict props. Below, since we have already pass in isPositive, we cannot pass in isZero nor isNegative */}
      {/* <RandomNumber value={10} isPositive={true}></RandomNumber> */}
      {/* <Toast position={"center"}></Toast> */}


      {/* 11, customed html elements */}
      {/* <CustomButton variant='primary' onClick={()=>{console.log("clicked!")}}>
        A button
      </CustomButton> */}
      {/* <CustomedInput></CustomedInput> */}


      {/* 12, polymorphic component with keyword as */}
      {/* <Text size="sm" as='h1'>Heading</Text> */}
      {/* for label tag, it has its own native htmlfor attribute that binds it to other element.
      but when we create a polymorphic element, such native attribute is lost. Thus, we need 
      extra syntax to restore such attribute, see text.tsx */}
      {/* <Text size="sm" as='label' htmlFor='id'>Paragraph</Text> */}


      {/* 13. Practices */}
      {/* <ListGroup width={50} 
                list={["choice 1", "choice 2", "choice 3", "choice 4"]}
                onSelect={handleSelect}></ListGroup> */}
      {/* <MyButton onClick={()=> {console.log("Clicked!")}}
                color={"secondary"}>This is my Button</MyButton> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <MyPureComp name={myName}></MyPureComp> */}
      {/* <MemorizedComp name={myName}></MemorizedComp> */}
      {/* <button onClick={()=>updateName("Chen")}> Change Name </button> */}
      {/* <RccRef></RccRef> */}
      {/* <FwRef></FwRef> */}
      {/* <ErrorBound>
        <ErrorChildren name={"Hang"}></ErrorChildren>
        <ErrorChildren name={"bug"}></ErrorChildren>
      </ErrorBound> */}
      {/* <WrappedClikckComponent></WrappedClikckComponent>
      <WrappedHoverComponent name={"hover"}></WrappedHoverComponent> */}
      {/* <UseMemoHook></UseMemoHook> */}



      {/* 14, leaflet practice */}
      <Map></Map>
      {/* <Form ></Form> */}




      {/* 15, react lifecycle */}
      {/* <Mounting></Mounting> */}
      {/* <Updating></Updating> */}


      {/* 16, http calls */}
      {/* <GetList></GetList> */}
      {/* <PostForm></PostForm> */}


      {/* 17, useEffect hooks */}
      {/* <EffectCounter></EffectCounter> */}
      {/* <HookMouse></HookMouse> */}
      {/* <EffectHttpCall></EffectHttpCall> */}


      {/* 18, use callBack hooks */}
      {/* <CallbackParent></CallbackParent> */}




    </div>
  );
}

export default App;
