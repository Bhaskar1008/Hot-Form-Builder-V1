export interface FormComponent {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  options?: Array<{ label: string; value: string }>;
  validation?: ValidationRules;
  children?: FormComponent[];
  parentId?: string;
}

export interface ValidationRules {
  required?: boolean;
  pattern?: string;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  custom?: (value: any) => boolean;
}

export interface FormState {
  components: FormComponent[];
  selectedComponent: string | null;
  draggedComponent: FormComponent | null;
  orientation: 'horizontal' | 'vertical';
}

export interface WidgetComponent extends FormComponent {
  settings: Record<string, any>;
  style: Record<string, any>;
}