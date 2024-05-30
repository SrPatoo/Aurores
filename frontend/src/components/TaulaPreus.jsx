"use client";
 
import { Table } from "flowbite-react";
 
const TaulaPreus = () => {
    return (
        <div className="overflow-x-auto">
            <Table hoverable className="table-fixed w-full">
                <Table.Head>
                    <Table.HeadCell className="w-1/4 text-center">TEMPS</Table.HeadCell>
                    <Table.HeadCell className="w-1/4 text-center">PREU BASE</Table.HeadCell>
                    <Table.HeadCell className="w-1/4 text-center">21% IVA</Table.HeadCell>
                    <Table.HeadCell className="w-1/4 text-center">PREU FINAL</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
                            1h
                        </Table.Cell>
                        <Table.Cell className="text-center">45,00€</Table.Cell>
                        <Table.Cell className="text-center">9,45€</Table.Cell>
                        <Table.Cell className="text-center">54,50€</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
                            2h
                        </Table.Cell>
                        <Table.Cell className="text-center">82,65€</Table.Cell>
                        <Table.Cell className="text-center">17,36€</Table.Cell>
                        <Table.Cell className="text-center">100,00€</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">3h</Table.Cell>
                        <Table.Cell className="text-center">120,00€</Table.Cell>
                        <Table.Cell className="text-center">25,20€</Table.Cell>
                        <Table.Cell className="text-center">145,20€</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">4h</Table.Cell>
                        <Table.Cell className="text-center">150,00€</Table.Cell>
                        <Table.Cell className="text-center">31,50€</Table.Cell>
                        <Table.Cell className="text-center">181,50€</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
}
 
export default TaulaPreus;