"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface DataItem {
    valor: string;
    marca: string;
    modelo: string;
    anoModelo: number;
    combustivel: string;
    codigoFipe: string;
    mesReferencia: string;
    tipoVeiculo: number;
    siglaCombustivel: string;
}

interface DataTableProps {
    data: DataItem[];
}

export const DataTable = ({ data }: DataTableProps) => {
    const columns: ColumnDef<DataItem>[] = [
        {
            accessorKey: "marca",
            header: "Marca",
        },
        {
            accessorKey: "modelo",
            header: "Modelo",
        },
        {
            accessorKey: "anoModelo",
            header: "Ano",
        },
        {
            accessorKey: "combustivel",
            header: "Combustível",
        },
        {
            accessorKey: "valor",
            header: "Valor",
        },
        {
            accessorKey: "mesReferencia",
            header: "Mês de Referência",
        },
    ];

    return (
        <Table className="p-2 w-[230px] md:w-full">
            <TableHeader>
                <TableRow >
                    {columns.map((column) => (
                        <TableHead key={(column as { accessorKey: string }).accessorKey} className="text-white bg-[#4F8AA6] text-center">
                            {column.header as string}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item, idx) => (
                    <TableRow key={idx} className="text-center">
                        <TableCell>{item.marca}</TableCell>
                        <TableCell>{item.modelo}</TableCell>
                        <TableCell>{item.anoModelo}</TableCell>
                        <TableCell>{item.combustivel}</TableCell>
                        <TableCell>{item.valor}</TableCell>
                        <TableCell>{item.mesReferencia}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
