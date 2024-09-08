import { API } from "../axios-config";

import { Environment } from "../../../environments";

interface IListagemPessoa {
  id: number;
  nomeCompleto: string;
  email: string;
  cidadeId: number;
}

interface IDetalhePessoa {
  id: number;
  nomeCompleto: string;
  email: string;
  cidadeId: number;
}

type TPessoasComTotalCount = {
  data: IListagemPessoa[];
  totalCount: number;
};

const getAll = async (
  page = 1,
  filter = ""
): Promise<TPessoasComTotalCount | Error> => {
  try {
    const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
    const { data, headers } = await API.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(
          headers["x-total-count"] || Environment.LIMITE_DE_LINHAS
        ),
      };
    }

    return new Error("Erro ao listar os registros");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao listar os registros"
    );
  }
};

const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
  try {
    const urlRelativa = `/pessoas/${id}`;
    const { data } = await API.get(urlRelativa);

    if (data) {
      return data;
    }

    return new Error("Erro ao buscar o registro");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao buscar registro"
    );
  }
};

const create = async (
  dados: Omit<IDetalhePessoa, "id">
): Promise<number | Error> => {
  try {
    const urlRelativa = "/pessoas";
    const { data } = await API.post<IDetalhePessoa>(urlRelativa, dados);

    if (data) {
      return data.id;
    }

    return new Error("Erro ao criar o registro");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao criar o registro"
    );
  }
};

const update = async (id: number, dados: IDetalhePessoa): Promise<void | Error> => {
  try {
    
    const urlRelativa = `/pessoas/${id}`;    
    await API.put<IDetalhePessoa>(urlRelativa, dados);

  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao atualizar o registro"
    );
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    
    const urlRelativa = `/pessoas/${id}`;    
    await API.delete<IDetalhePessoa>(urlRelativa);

  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao excluir o registro"
    );
  }
};

export const PessoasService = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
