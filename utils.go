package dqlx

import (
	"log"

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

		queries = append(queries, mutation.query)

		setData, deleteData, err := mutationData(mutation)

		log.Println("Set Dele:: ", setData, deleteData, err)

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
