package dqlx

import (
	"github.com/dgraph-io/dgo/v210/protos/api"
)

func AppendMutation(executor OperationExecutor, mutations ...MutationBuilder) ([]*api.Mutation, []QueryBuilder, error) {
	var queries []QueryBuilder
	var mutationRequests []*api.Mutation

	for _, mutation := range mutations {
		var condition string

		if mutation.condition != nil {
			conditionDql, _, err := mutation.condition.ToDQL()
			if err != nil {
				return nil, nil, err
			}
			condition = conditionDql
		}

		// log.Printf("\n\nQuering::: %+v\n\n", mutation.query)

		if query, _, err := mutation.query.ToDQL(); !IsEmptyQuery(query) && err == nil {
			// log.Println("\n\nAdding Query::: ", IsEmptyQuery(query), err, "\n\n <endAdding>")

			queries = append(queries, mutation.query)
		}

		setData, deleteData, err := mutationData(mutation)

		// log.Println("Set Dele:: ", string(setData), string(deleteData), err)

		if err != nil {
			return nil, nil, err
		}

		mutationRequest := &api.Mutation{
			SetJson:    setData,
			DeleteJson: deleteData,
			Cond:       condition,
			CommitNow:  executor.tnx == nil,
		}

		mutationRequests = append(mutationRequests, mutationRequest)
	}

	return mutationRequests, queries, nil
}
