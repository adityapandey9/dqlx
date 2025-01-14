package dqlx_test

import (
	"testing"

	dql "github.com/adityapandey9/dqlx"
	"github.com/stretchr/testify/require"
)

func Test_Multiple_Blocks(t *testing.T) {
	query1 := dql.
		QueryEdge("bladerunner", dql.EqFn("item", "value")).
		Fields(`
			uid
			super_alias:name
			initial_release_date
			d AS netflix_id
		`).
		Filter(dql.Eq{"field1": "value1"})

	query2 := dql.
		QueryEdge("bladerunner2", dql.EqFn("item", "value")).
		Fields(`
			uid
			name
		`).
		Filter(dql.Eq{"field1": "value1"})

	query, variables, err := dql.QueriesToDQL(query1, query2)

	require.NoError(t, err)
	require.Equal(t, map[string]string{
		"$0": "value",
		"$1": "value1",
		"$2": "value",
		"$3": "value1",
	}, variables)

	expected := dql.Minify(`
		query Bladerunner_Bladerunner2($0:string, $1:string, $2:string, $3:string) {
			<bladerunner>(func: eq(<item>,$0)) @filter(eq(<field1>,$1)) {
				<uid>
				<super_alias>:<name>
				<initial_release_date>
				d AS <netflix_id>
			}

			<bladerunner2>(func: eq(<item>,$2)) @filter(eq(<field1>,$3)) {
				<uid>
				<name>
			}
		}
	`)

	require.Equal(t, expected, query)
}
