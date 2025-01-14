"use client";
import dynamic from 'next/dynamic';
import Loading from './Loading'; // Import the loading component
import { Suspense, useState } from 'react';
import { AppShell, Title,Image,Group,UnstyledButton,Burger} from '@mantine/core';
import MouseFollower from '@/components/mousetracker';
import Footer from '@/components/Footer';
const MainPage = dynamic(
    () => import('../components/pages/main'), // Your main component
    {
        ssr: false, // Disable server-side rendering for this component
        loading: () => <Loading /> // Specify the loading component
    }
);

const Page = () => {
  const[opened,SetOpended]=useState(false)
    return (
        <div>
          <Suspense fallback={<Loading/>}>

    <MouseFollower/>
          <AppShell     header={{ height: 80 }}
          navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}>
            <AppShell.Header bg={"dark"} p="md" display={"flex"} style={{"flexDirection":'row'}}>
              <Image w="50px"  height="50px" src={'/logo.png'}></Image>
              <Title p="md" pt="0" style={{fontSize:'2rem'}} c="#fff">NeXus 3.0 </Title>
              <Burger mr="md" color="#fff"  pos={"absolute"} right={"0px"} opened={opened} onClick={()=>{
                SetOpended(!opened)
              }} hiddenFrom="sm" size="lg" />
              <Group justify="space-between" style={{ flex: 1 }}>
            <Group ml="xl" c="#fff" pos={"absolute"} right={"100px"} gap={15}  visibleFrom="sm">
            <UnstyledButton >Home</UnstyledButton>
        <UnstyledButton >About</UnstyledButton>
        <UnstyledButton >Projects</UnstyledButton>
        <UnstyledButton >Contact</UnstyledButton>

        <UnstyledButton >Highlight</UnstyledButton>
        <UnstyledButton>Research work</UnstyledButton>
        <UnstyledButton>News</UnstyledButton>
            </Group>
          </Group>
            </AppShell.Header>
            <AppShell.Navbar  c={"#fff"}  bg={"dark"} py="md" px={4}>
        <UnstyledButton w={"100%"} m={'md'} h={"xl"} >Home</UnstyledButton>
        <UnstyledButton w={"100%"} m={'md'} h={"xl"} >About</UnstyledButton>
        <UnstyledButton w={"100%"} m={'md'} h={"xl"}>Projects</UnstyledButton>
        <UnstyledButton  w={"100%"} m={'md'} h={"xl"}>Contact</UnstyledButton>

        <UnstyledButton w={"100%"} m={'md'} h={"xl"} >Highlight</UnstyledButton>
        <UnstyledButton w={"100%"} m={'md'} h={"xl"}>Research work</UnstyledButton>
        <UnstyledButton w={"100%"} m={'md'} h={"xl"}>News </UnstyledButton>
      </AppShell.Navbar>
          <AppShell.Main>
            <MainPage />
            </AppShell.Main>
            </AppShell>
            </Suspense>
        </div>
    );
};

export default Page;
