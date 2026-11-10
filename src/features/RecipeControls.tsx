import { Input } from '../shared/ui/Input';
import { Select } from '../shared/ui/Select';
import type { Difficulty } from '../entities/recipeTypes';
import type { FilterParams, SortOption } from './recipeFilters';

interface RecipeControlsProps {
  params: FilterParams;
  tags: string[];
  onChange: (newParams: FilterParams) => void;
}

export const RecipeControls = ({ params, tags, onChange }: RecipeControlsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 bg-white p-4 rounded-xl border border-slate-200">
      <Input
        placeholder="Поиск по названию или ингредиенту..."
        value={params.search}
        onChange={(e) => onChange({ ...params, search: e.target.value })}
      />

      <Select
        value={params.difficulty}
        onChange={(e) => onChange({ ...params, difficulty: e.target.value as Difficulty | 'All' })}
      >
        <option value="All">Любая сложность</option>
        <option value="Easy">Easy (Лёгкий)</option>
        <option value="Medium">Medium (Средний)</option>
        <option value="Hard">Hard (Сложный)</option>
      </Select>

      <Select
        value={params.tag}
        onChange={(e) => onChange({ ...params, tag: e.target.value })}
      >
        <option value="">Все категории (теги)</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </Select>

      <Select
        value={params.sort}
        onChange={(e) => onChange({ ...params, sort: e.target.value as SortOption })}
      >
        <option value="default">По умолчанию</option>
        <option value="rating-desc">Сначала популярные (рейтинг)</option>
        <option value="calories-asc">Меньше калорий</option>
        <option value="time-asc">Быстрее готовить</option>
      </Select>
    </div>
  );
};
